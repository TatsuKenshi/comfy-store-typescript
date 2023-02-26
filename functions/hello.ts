// domain/.netlify/functions/hello

type PromiseType = {
  statusCode: number;
  body: string;
};

exports.handler = async function (event, context): Promise<PromiseType> {
  return {
    statusCode: 200,
    body: "Hello World",
  };
};
