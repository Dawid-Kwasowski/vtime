const requestPermission = async () => {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    console.log("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    await Notification.requestPermission();
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
};

export { requestPermission };
