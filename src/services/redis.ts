import Redis from "ioredis";
import { promisify } from "util";

const redisClient = new Redis();

const getRedis = (value: string) => {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient);
  return syncRedisGet(value);
};

const setRedis = ({ key, value }: { key: string; value: string }) => {
  var promise = new Promise(function (resolve, reject) {
    /// set data in redis
    redisClient.set(key, value, "EX", 21600).then(
      function (data) {
        resolve(data);
      },
      function (err) {
        reject(err);
      }
    );
  });

  return promise;
};

export { redisClient, getRedis, setRedis };
