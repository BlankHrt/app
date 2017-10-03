export const USER_KEY = "loginState";
export const USER_ID = "1000";

export const onSignOut = () => global.storage.clearMapForKey(USER_KEY);

export const getUser = () => global.storage.load({ key: USER_KEY, id: USER_ID });
