exports.handler = async (event) => {
  try {
    const params = new URLSearchParams(event.body);

    await fetch(
      "https://script.google.com/macros/s/AKfycbyseGE-RBbCJK4yQA5e5R4FvjNvJGrrJE-xpM3TufmWfRUynTEvKum-RYfg_bxZzRCL_w/exec",
      {
        method: "POST",
        body: params,
      },
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }
};
