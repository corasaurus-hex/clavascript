const status = async function () {
return (await (async function () {
 return (await (async function () {
 let resp, status;
resp = await(fetch("https://clojure.org"));
status = await(resp["status"]);
return (await (async function () {
 return status;
})());
})());
})());
};
console.log("status:", await(status()));