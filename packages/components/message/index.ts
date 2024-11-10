import { withInstallFunction } from "@/utils";

import Message from './src/method'

export const GpMessage = withInstallFunction(Message, '$message');
export default GpMessage;

export * from './src/message'