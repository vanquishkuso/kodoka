import type { CollectionConfig } from 'payload'

export const Navigation: CollectionConfig = {
  slug: "navigation",
  admin: {
    useAsTitle: "locale",
  },
  fields: [
    {
      name: "locale",
      type: "select",
      options: [
        { label: "Swedish", value: "sv" },
        { label: "English", value: "en" },
      ],
      required: true,
      unique: true,
    },
    {
      name: "items",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "href",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "getStarted",
      type: "text",
      required: true,
    },
  ],
}
