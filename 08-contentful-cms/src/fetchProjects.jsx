import { createClient } from 'contentful';

const client = createClient({
  space: 'k621jqxocuay',
  environment: 'master',
  accessToken: 'XxcCELffyB65CWfaCVysIQZZ-At3uWL8k5vkANGbuTw',
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response));
