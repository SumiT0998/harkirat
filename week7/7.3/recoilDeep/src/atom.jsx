import { atom, selector } from "recoil";
import axios from "axios";
// export const networkAtom = atom({
//   key: "networkAtom1",
//   default: 112,
// });
// export const jobAtom = atom({
//   key: "jobAtom",
//   default: 132,
// });
// export const messaageAtom = atom({
//   key: "messageAtom",
//   default: 22,
// });

export const notifications = atom({
  key: "networkAtom",
  // default: { network: 0, jobs: 0, notifications: 0, messaging: 0 },
  default: selector({
    key: "networkatomselector",
    get: async () => {
      // await new Promise((r) => setTimeout(r, 5000));
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalnotification = selector({
  key: "totalnotification",
  get: ({ get }) => {
    const allnotification = get(notifications);
    return (
      allnotification.network +
      allnotification.jobs +
      allnotification.notifications +
      allnotification.messaging
    );
  },
});
