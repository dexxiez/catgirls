import { OpenRouterClient, QueryResponseModel } from "../src";
import { stdout } from "process";

const getModels = async () => {
  const client = new OpenRouterClient(process.env["API_KEY"] as string);
  const models = await client.getModels();
  return models;
};

const renderTypeWithComment = (model: QueryResponseModel) => {
  return `/** ${model.name}
  @capabilities ${model.supported_parameters.join(", ")}
  @context_length ${model.context_length}
  @url https://openrouter.ai/${model.id}
  */
  | "${model.id}"`;
};

const renderArrayItemWithDetailsComment = (model: QueryResponseModel) => {
  return `/** ${model.name}
  @capabilities ${model.supported_parameters.join(", ")}
  @context_length ${model.context_length}
  @url https://openrouter.ai/${model.id}
  */
  "${model.id}"`;
};

const renderToolCallingModel = (models: QueryResponseModel[]): string => {
  // Render both the `as const` and type version of the model
  const includedModels = models.filter((model) =>
    model.supported_parameters.includes("tools"),
  );
  return `export const toolCallingModels = [
  ${includedModels.map((model) => renderArrayItemWithDetailsComment(model)).join(",\n")}
  ] as const;

  export type ToolCallingModel = (typeof toolCallingModels)[number] | (string & {});`;
};

const renderFile = async () => {
  const models = await getModels();
  const render = `// ! Generated file, do not modify by hand. See packages/openrouter/scripts/generate-models.ts

  export type RouterModel = 
	  ${models.map((model) => renderTypeWithComment(model)).join("\n")}
  	| (string & {});

  ${renderToolCallingModel(models)}`;
  return render;
};

renderFile().then((output) => stdout.write(output));
