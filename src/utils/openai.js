import { GoogleGenerativeAI } from "@google/generative-ai";
import { GENAI_KEY } from "./constants";

const openai = new GoogleGenerativeAI(GENAI_KEY)

export default openai;