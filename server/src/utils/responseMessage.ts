export default function responseMessage(err: boolean, message: unknown, data: any = undefined){
  return {err, message, data}
}