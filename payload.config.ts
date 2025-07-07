import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import path from 'path';

export default buildConfig({
  admin: {
    user: 'users',
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/analytix-pro',
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'locale',
          type: 'select',
          options: [
            { label: 'Swedish', value: 'sv' },
            { label: 'English', value: 'en' },
          ],
          required: true,
        },
        {
          name: 'hero',
          type: 'group',
          fields: [
            {
              name: 'badge',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'titleHighlight',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'cta',
              type: 'text',
              required: true,
            },
            {
              name: 'viewWork',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'services',
          type: 'group',
          fields: [
            {
              name: 'badge',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'items',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'features',
                  type: 'array',
                  fields: [
                    {
                      name: 'feature',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'icon',
                  type: 'select',
                  options: [
                    { label: 'Globe', value: 'globe' },
                    { label: 'Shield', value: 'shield' },
                    { label: 'Code', value: 'code' },
                    { label: 'Shopping Cart', value: 'shopping-cart' },
                    { label: 'Pie Chart', value: 'pie-chart' },
                    { label: 'Activity', value: 'activity' },
                  ],
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'pricing',
          type: 'group',
          fields: [
            {
              name: 'badge',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'plans',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'price',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'features',
                  type: 'array',
                  fields: [
                    {
                      name: 'feature',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'popular',
                  type: 'checkbox',
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          name: 'testimonials',
          type: 'group',
          fields: [
            {
              name: 'badge',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'reviews',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'role',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'contact',
          type: 'group',
          fields: [
            {
              name: 'badge',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'email',
              type: 'email',
              required: true,
            },
            {
              name: 'phone',
              type: 'text',
              required: true,
            },
            {
              name: 'address',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      slug: 'navigation',
      admin: {
        useAsTitle: 'locale',
      },
      fields: [
        {
          name: 'locale',
          type: 'select',
          options: [
            { label: 'Swedish', value: 'sv' },
            { label: 'English', value: 'en' },
          ],
          required: true,
          unique: true,
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'getStarted',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});