import { PromptTemplate } from "langchain/prompts";

export const run = async () => {
    const template = "What is the capital city of {country}";
    const prompt = new PromptTemplate({
        inputVariables: ["country"],
        template: template,
    });
    const res = await prompt.format({
        country: "Germany",
    });
    console.log(res);
}

run();