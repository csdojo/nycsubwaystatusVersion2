const HOST =
  process.env.NODE_ENV === "production" ? "/proxy" : "http://localhost:3001";

// 正在热映
export const API_IN_THEATERS = `${HOST}/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b`;