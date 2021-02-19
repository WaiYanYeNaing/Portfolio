export default {
  name: "pluralsight",
  title: "Pluralsight",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "certificate",
      title: "Certificate",
      type: "file",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
        },
        {
          name: "author",
          title: "Author",
          type: "reference",
          to: { type: "author" },
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
