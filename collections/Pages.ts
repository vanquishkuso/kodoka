import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "locale",
      type: "select",
      options: [
        { label: "Swedish", value: "sv" },
        { label: "English", value: "en" },
      ],
      required: true,
    },
    {
      name: "hero",
      type: "group",
      fields: [
        {
          name: "badge",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "titleHighlight",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "cta",
          type: "text",
          required: true,
        },
        {
          name: "viewWork",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "services",
      type: "group",
      fields: [
        {
          name: "badge",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "items",
          type: "array",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
            {
              name: "features",
              type: "array",
              fields: [
                {
                  name: "feature",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "icon",
              type: "select",
              options: [
                { label: "Globe", value: "globe" },
                { label: "Shield", value: "shield" },
                { label: "Code", value: "code" },
                { label: "Shopping Cart", value: "shopping-cart" },
                { label: "Pie Chart", value: "pie-chart" },
                { label: "Activity", value: "activity" },
              ],
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "pricing",
      type: "group",
      fields: [
        {
          name: "badge",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "plans",
          type: "array",
          fields: [
            {
              name: "name",
              type: "text",
              required: true,
            },
            {
              name: "price",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
            {
              name: "features",
              type: "array",
              fields: [
                {
                  name: "feature",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "popular",
              type: "checkbox",
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      name: "testimonials",
      type: "group",
      fields: [
        {
          name: "badge",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "reviews",
          type: "array",
          fields: [
            {
              name: "text",
              type: "textarea",
              required: true,
            },
            {
              name: "name",
              type: "text",
              required: true,
            },
            {
              name: "role",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "contact",
      type: "group",
      fields: [
        {
          name: "badge",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "email",
          type: "email",
          required: true,
        },
        {
          name: "phone",
          type: "text",
          required: true,
        },
        {
          name: "address",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}
