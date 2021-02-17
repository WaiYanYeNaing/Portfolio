export default {
  name: "skillProgress",
  title: "SkillProgress",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "value",
      title: "Value",
      type: "number",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
  ],

  preview: {
    select: {
      title: "name",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
