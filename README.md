# Form data to Form schema

This tool is used to speculate form schema from form data. Take note that you still need to READ and EDIT the json schema result for better accuracy.

## Example

This is the json data in `data.json` file using as input **data.json**

```json
{
  "banner_heading": "heading",
  "banner_heading_live_tag": "",
  "banner_tag_line": "tagline",
  "banner_description": "desc",
  "background_image": "",
  "video_url": "test",
  "watch_video_button_text": "",
  "form_button_text_cms": "btn txt something",
  "schedule_button_text": "schedule txt",
  "refer_and_earn": "",
  "job_portal": "",
  "job_portal_url": "",
  "phone": "",
  "banner_background_color_code": "#ffffff",
  "location": "",
  "id": "6333c83e4d60646f1120e610",
  "code": "banner-1",
  "section": "banner",
  "courseSlug": "cspo-certification-training",
  "banner_counting": [
    {
      "name": "first name",
      "count": "1",
      "countText": "name text"
    },
    {
      "name": "second name",
      "count": "2",
      "countText": "second text"
    },
    {
      "name": "third",
      "count": "3",
      "countText": "count text 3"
    },
    {
      "name": "fourth",
      "count": "4",
      "countText": "count text 4"
    }
  ],
  "status": true,
  "form_button_target": {
    "id": 143242,
    "label": "alpha form target",
    "value": "alpha"
  }
}
```

This is the form schema in `schema.json` file using as output for edition

```json
{
  "formInfo": { "size": "", "endpoint": "" },
  "properties": [
    {
      "id": "l8v2zv61bzqh25juhk",
      "name": "banner_heading",
      "title": "Banner Heading",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv627bi7a05feyc",
      "name": "banner_heading_live_tag",
      "title": "Banner Heading Live Tag",
      "type": "text_field"
    },
    {
      "id": "l8v2zv62qke7k8yv1o",
      "name": "banner_tag_line",
      "title": "Banner Tag Line",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv62px9a09ky2tm",
      "name": "banner_description",
      "title": "Banner Description",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv62zs7gekneqkj",
      "name": "background_image",
      "title": "Background Image",
      "type": "text_field"
    },
    {
      "id": "l8v2zv622lxqz6gmbru",
      "name": "video_url",
      "title": "Video Url",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv62eb6jrh5m326",
      "name": "watch_video_button_text",
      "title": "Watch Video Button Text",
      "type": "text_field"
    },
    {
      "id": "l8v2zv62a3b3w9pb8tu",
      "name": "form_button_text_cms",
      "title": "Form Button Text Cms",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv62enue811rbin",
      "name": "schedule_button_text",
      "title": "Schedule Button Text",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv62o3p58rdlxdc",
      "name": "refer_and_earn",
      "title": "Refer And Earn",
      "type": "text_field"
    },
    {
      "id": "l8v2zv6284k31axw7th",
      "name": "job_portal",
      "title": "Job Portal",
      "type": "text_field"
    },
    {
      "id": "l8v2zv62lbj3bp5d21i",
      "name": "job_portal_url",
      "title": "Job Portal Url",
      "type": "text_field"
    },
    {
      "id": "l8v2zv62mplpxclk8vb",
      "name": "phone",
      "title": "Phone",
      "type": "text_field"
    },
    {
      "id": "l8v2zv63qf1f2ldirh",
      "name": "banner_background_color_code",
      "title": "Banner Background Color Code",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv63yt2y1u8pn6i",
      "name": "location",
      "title": "Location",
      "type": "text_field"
    },
    {
      "id": "l8v2zv63i2l9y3tkfhi",
      "name": "id",
      "title": "Id",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv63q34mpn74xq",
      "name": "code",
      "title": "Code",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv63q49xj0xwgms",
      "name": "section",
      "title": "Section",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv636lmjdq6zkd4",
      "name": "courseSlug",
      "title": "Course Slug",
      "type": "text_field",
      "required": true
    },
    {
      "id": "l8v2zv632bd5yoxkqyu",
      "name": "banner_counting",
      "title": "Banner Counting",
      "type": "block",
      "blockId": "<create a block and add its id here>",
      "children": [],
      "required": true
    },
    {
      "id": "l8v2zv634v00fanrxh",
      "name": "status",
      "title": "Status",
      "type": "checkbox",
      "required": true
    },
    {
      "id": "l8v2zv6366y6bcwcmwu",
      "name": "form_button_target",
      "title": "Form Button Target",
      "type": "checkbox",
      "required": true
    }
  ]
}
```
