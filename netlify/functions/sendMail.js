exports.handler = async (event) => {
  try {
    const params = new URLSearchParams(event.body);

    await fetch(
      "https://script.google.com/macros/s/AKfycbz7wnoA5gxi-B8Y2GChzFrevz-9Wbz6BdzZZPlUiM8wvqu-RR3wUgwIVA6ttYWU8YTu/exec",
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
