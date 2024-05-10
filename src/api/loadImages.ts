export const loadImages = async (time: string) => {
  await new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return [
    {
      id: 1,
      url: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: time,
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: time,
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600",
      time: time,
    },
  ];
};
