module.exports = async function (context, req) {
  const host = (req.headers["host"] || "").toLowerCase();

  if (host == "teesa.ai" || host == "www.teesa.ai") {
    context.res = {
      status: 302,
      headers: {
        Location: "https://v0048.teesa.ai/"
      }
    };
    return;
  }

  context.res = {
    status: 404
  };
};
