const curr = new Date();
curr.setDate(curr.getDate());
export const date = curr.toISOString().substr(0, 10);
