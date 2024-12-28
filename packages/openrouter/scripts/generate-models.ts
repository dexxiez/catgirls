import { OpenRouterClient } from "../src";
import { stdout } from "process";

const getModels = async () => {
  const client = new OpenRouterClient(process.env["API_KEY"] as string);
  const models = await client.getModels();
  return models;
};

const renderTypeWithComment = (id: string, name: string) => {
  return `/** ${name} */
		  | "${id}"`;
};

const renderTypeFile = async () => {
  const models = await getModels();
  const render = `export type RouterModel = 
	  ${models.map((model) => renderTypeWithComment(model.id, model.name)).join("\n")}
  	| (string & {});`;
  return render;
};

renderTypeFile().then((output) => stdout.write(output));
