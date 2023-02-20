exports.handler = async (event, context) => {
var list = [
  "vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlNBLWtpMi0yMXRoIiwNCiAgImFkZCI6ICIyMDMuMTcuMTI2LjEyNiIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIzYjkzZDU0My1kZDg4LTQxYTctYmFhMi03OGY0Y2IzOWYxNTIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInNlcnZlcjIuaGVxdnpscnkud29ya2Vycy5kZXYiLA0KICAicGF0aCI6ICIvc2ctZnJlZXZtZXNzLnByaXZhdGVpcC5uZXQvZnJlZXZtZXNzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogInNlcnZlcjIuaGVxdnpscnkud29ya2Vycy5kZXYiLA0KICAiYWxwbiI6ICJoMixodHRwLzEuMSIsDQogICJmcCI6ICJyYW5kb20iDQp9",

]

  return {
    
    body: btoa(list.join("\r\n"))
  };
};
