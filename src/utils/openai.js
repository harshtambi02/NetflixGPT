// import OpenAI from 'openai';
// import { OPENAI_KEY } from './constants';

// const openai = new OpenAI({
//   apiKey: OPENAI_KEY,
//   dangerouslyAllowBrowser: true // This is the default and can be omitted
// });

// export default openai

import { GoogleGenerativeAI } from "@google/generative-ai";
import { GENAI_KEY } from "./constants";

const openai = new GoogleGenerativeAI(GENAI_KEY)

export default openai;