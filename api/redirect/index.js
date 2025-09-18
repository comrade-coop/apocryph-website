module.exports = async function (context, req) {
  const host = (req.headers["host"] || "").toLowerCase();
  const urlPath = (req.url || "").split("?")[0];

  if (urlPath == "/" && (host == "teesa.ai" || host == "www.teesa.ai")) {
    context.res = {
      status: 302,
      headers: {
        Location: "https://v0048.teesa.ai/"
      }
    };
    return;
  }

  context.res = { status: 404 };
};
