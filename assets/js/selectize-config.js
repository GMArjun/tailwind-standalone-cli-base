const talents = [
  {
    id: 1,
    title: "Figurant",
  },
  {
    id: 2,
    title: "Mannequin",
  },
  {
    id: 3,
    title: "Acteur",
  },
  {
    id: 4,
    title: "Comédien",
  },
  {
    id: 5,
    title: "Model photo",
  },
  {
    id: 6,
    title: "Influenceurs",
  },
  {
    id: 7,
    title: "Chanteur / Rappeur",
  },
  {
    id: 8,
    title: "Dj / Beat maker",
  },
  {
    id: 9,
    title: "Musicien",
  },
  {
    id: 10,
    title: "Styliste de mode",
  },
  {
    id: 11,
    title: "Danseur",
  },
  {
    id: 12,
    title: "Acrobate / Cascadeur",
  },
  {
    id: 13,
    title: "Maquilleur",
  },
  {
    id: 14,
    title: "Photographe",
  },
  {
    id: 15,
    title: "Vidéaste",
  },
  {
    id: 16,
    title: "Animateur",
  },
  {
    id: 17,
    title: "Scénariste",
  },
];

$(function () {
  $("#talent-selection").selectize({
    plugins: ["remove_button"],
    maxItems: null,
    valueField: "id",
    labelField: "title",
    searchField: "title",
    options: talents,
    create: false,
  });
});
