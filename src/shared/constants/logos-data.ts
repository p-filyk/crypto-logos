// models
import type LogoItem from '@/shared/models/logos/logo-item';

const LOGOS_DATA: LogoItem[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    mainCategory: 'fintech',
    secondaryCategories: ['payments', 'billing'],
    websiteLink: 'https://stripe.com',
    brandKitLink: 'https://stripe.com/brand',
    mainLogo: { url: 'https://picsum.photos/id/0/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/1/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/2/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/stripe/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/stripe/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'shopify',
    name: 'Shopify',
    mainCategory: 'ecommerce',
    secondaryCategories: ['commerce', 'store'],
    websiteLink: 'https://www.shopify.com',
    brandKitLink: 'https://www.shopify.com/press',
    mainLogo: { url: 'https://picsum.photos/id/3/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/10/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/11/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/shopify/text-light.png', format: 'png' }],
        dark: [{ url: 'https://example.com/logos/shopify/text-dark.png', format: 'png' }],
      },
    },
  },
  {
    id: 'notion',
    name: 'Notion',
    mainCategory: 'productivity',
    secondaryCategories: ['docs', 'notes', 'workspace'],
    websiteLink: 'https://www.notion.so',
    brandKitLink: 'https://www.notion.so/press',
    mainLogo: { url: 'https://picsum.photos/id/12/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [
          { url: 'https://picsum.photos/id/20/200/200', format: 'jpg' },
          { url: 'https://picsum.photos/id/21/200/200', format: 'jpg' },
        ],
        dark: [{ url: 'https://picsum.photos/id/22/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/notion/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/notion/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'vercel',
    name: 'Vercel',
    mainCategory: 'devtools',
    secondaryCategories: ['hosting', 'deployment', 'nextjs'],
    websiteLink: 'https://vercel.com',
    brandKitLink: 'https://vercel.com/press',
    mainLogo: { url: 'https://picsum.photos/id/23/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/30/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/31/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/vercel/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/vercel/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'openai',
    name: 'OpenAI',
    mainCategory: 'ai',
    secondaryCategories: ['ml', 'research'],
    websiteLink: 'https://openai.com',
    brandKitLink: 'https://openai.com/brand',
    mainLogo: { url: 'https://picsum.photos/id/32/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/40/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/41/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/openai/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/openai/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'paypal',
    name: 'PayPal',
    mainCategory: 'fintech',
    secondaryCategories: ['payments', 'wallet'],
    websiteLink: 'https://www.paypal.com',
    brandKitLink: 'https://www.paypal.com/us/webapps/mpp/logo-center',
    mainLogo: { url: 'https://picsum.photos/id/42/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/50/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/51/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/paypal/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/paypal/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'wise',
    name: 'Wise',
    mainCategory: 'fintech',
    secondaryCategories: ['payments', 'transfer'],
    websiteLink: 'https://wise.com',
    brandKitLink: 'https://wise.com/press',
    mainLogo: { url: 'https://picsum.photos/id/52/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/60/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/61/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/wise/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/wise/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'revolut',
    name: 'Revolut',
    mainCategory: 'fintech',
    secondaryCategories: ['banking', 'payments'],
    websiteLink: 'https://www.revolut.com',
    brandKitLink: 'https://www.revolut.com/press/',
    mainLogo: { url: 'https://picsum.photos/id/62/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/70/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/71/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/revolut/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/revolut/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    mainCategory: 'ecommerce',
    secondaryCategories: ['commerce', 'payments'],
    websiteLink: 'https://woocommerce.com',
    brandKitLink: 'https://woocommerce.com/press/',
    mainLogo: { url: 'https://picsum.photos/id/72/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/80/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/81/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/woocommerce/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/woocommerce/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'bigcommerce',
    name: 'BigCommerce',
    mainCategory: 'ecommerce',
    secondaryCategories: ['commerce', 'platform'],
    websiteLink: 'https://www.bigcommerce.com',
    brandKitLink: 'https://www.bigcommerce.com/press/',
    mainLogo: { url: 'https://picsum.photos/id/82/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/90/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/91/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/bigcommerce/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/bigcommerce/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'slack',
    name: 'Slack',
    mainCategory: 'productivity',
    secondaryCategories: ['communication', 'collaboration'],
    websiteLink: 'https://slack.com',
    brandKitLink: 'https://slack.com/intl/en-vn/brand-guidelines',
    mainLogo: { url: 'https://picsum.photos/id/92/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/100/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/101/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/slack/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/slack/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'asana',
    name: 'Asana',
    mainCategory: 'productivity',
    secondaryCategories: ['project-management', 'tasks'],
    websiteLink: 'https://asana.com',
    brandKitLink: 'https://asana.com/brand',
    mainLogo: { url: 'https://picsum.photos/id/102/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/110/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/111/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/asana/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/asana/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'trello',
    name: 'Trello',
    mainCategory: 'productivity',
    secondaryCategories: ['kanban', 'tasks'],
    websiteLink: 'https://trello.com',
    brandKitLink: 'https://www.atlassian.com/company/news/press-kit',
    mainLogo: { url: 'https://picsum.photos/id/112/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/120/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/121/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/trello/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/trello/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'github',
    name: 'GitHub',
    mainCategory: 'devtools',
    secondaryCategories: ['git', 'collaboration', 'ci-cd'],
    websiteLink: 'https://github.com',
    brandKitLink: 'https://github.com/logos',
    mainLogo: { url: 'https://picsum.photos/id/122/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/130/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/131/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/github/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/github/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    mainCategory: 'devtools',
    secondaryCategories: ['git', 'ci-cd', 'devops'],
    websiteLink: 'https://gitlab.com',
    brandKitLink: 'https://about.gitlab.com/press/press-kit/',
    mainLogo: { url: 'https://picsum.photos/id/132/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/140/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/141/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/gitlab/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/gitlab/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    mainCategory: 'ai',
    secondaryCategories: ['ml', 'research', 'llm'],
    websiteLink: 'https://www.anthropic.com',
    brandKitLink: 'https://www.anthropic.com/news',
    mainLogo: { url: 'https://picsum.photos/id/142/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/150/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/151/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/anthropic/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/anthropic/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    mainCategory: 'ai',
    secondaryCategories: ['ml', 'open-source', 'platform'],
    websiteLink: 'https://huggingface.co',
    brandKitLink: 'https://huggingface.co/brand',
    mainLogo: { url: 'https://picsum.photos/id/152/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/160/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/161/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/huggingface/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/huggingface/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'stabilityai',
    name: 'Stability AI',
    mainCategory: 'ai',
    secondaryCategories: ['generative-ai', 'ml'],
    websiteLink: 'https://stability.ai',
    brandKitLink: 'https://stability.ai/press',
    mainLogo: { url: 'https://picsum.photos/id/162/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/170/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/171/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/stabilityai/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/stabilityai/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'figma',
    name: 'Figma',
    mainCategory: 'design',
    secondaryCategories: ['collaboration', 'ui-design'],
    websiteLink: 'https://www.figma.com',
    brandKitLink: 'https://www.figma.com/brand',
    mainLogo: { url: 'https://picsum.photos/id/180/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/181/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/182/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/figma/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/figma/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'adobe',
    name: 'Adobe',
    mainCategory: 'design',
    secondaryCategories: ['creative', 'software'],
    websiteLink: 'https://www.adobe.com',
    brandKitLink: 'https://www.adobe.com/about-adobe/contact/press.html',
    mainLogo: { url: 'https://picsum.photos/id/183/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/184/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/185/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/adobe/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/adobe/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'canva',
    name: 'Canva',
    mainCategory: 'design',
    secondaryCategories: ['templates', 'graphics'],
    websiteLink: 'https://www.canva.com',
    brandKitLink: 'https://www.canva.com/newsroom/brand-resources/',
    mainLogo: { url: 'https://picsum.photos/id/186/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/187/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/188/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/canva/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/canva/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'sketch',
    name: 'Sketch',
    mainCategory: 'design',
    secondaryCategories: ['ui-design', 'mac'],
    websiteLink: 'https://www.sketch.com',
    brandKitLink: 'https://www.sketch.com/press/',
    mainLogo: { url: 'https://picsum.photos/id/189/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/190/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/191/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/sketch/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/sketch/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'docker',
    name: 'Docker',
    mainCategory: 'devtools',
    secondaryCategories: ['containers', 'infrastructure'],
    websiteLink: 'https://www.docker.com',
    brandKitLink: 'https://www.docker.com/company/newsroom/media-resources',
    mainLogo: { url: 'https://picsum.photos/id/192/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/193/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/194/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/docker/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/docker/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    mainCategory: 'devtools',
    secondaryCategories: ['orchestration', 'containers'],
    websiteLink: 'https://kubernetes.io',
    brandKitLink: 'https://www.cncf.io/brand-guidelines/',
    mainLogo: { url: 'https://picsum.photos/id/195/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/196/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/197/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/kubernetes/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/kubernetes/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'aws',
    name: 'AWS',
    mainCategory: 'cloud',
    secondaryCategories: ['infrastructure', 'hosting'],
    websiteLink: 'https://aws.amazon.com',
    brandKitLink: 'https://aws.amazon.com/trademark-guidelines/',
    mainLogo: { url: 'https://picsum.photos/id/198/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/199/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/200/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/aws/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/aws/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    mainCategory: 'cloud',
    secondaryCategories: ['infrastructure', 'platform'],
    websiteLink: 'https://azure.microsoft.com',
    brandKitLink: 'https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks',
    mainLogo: { url: 'https://picsum.photos/id/201/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/202/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/203/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/azure/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/azure/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    mainCategory: 'cloud',
    secondaryCategories: ['infrastructure', 'ai'],
    websiteLink: 'https://cloud.google.com',
    brandKitLink: 'https://cloud.google.com/press',
    mainLogo: { url: 'https://picsum.photos/id/204/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/205/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/206/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/gcp/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/gcp/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    mainCategory: 'cloud',
    secondaryCategories: ['hosting', 'infrastructure'],
    websiteLink: 'https://www.digitalocean.com',
    brandKitLink: 'https://www.digitalocean.com/press',
    mainLogo: { url: 'https://picsum.photos/id/207/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/208/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/209/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/digitalocean/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/digitalocean/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'heroku',
    name: 'Heroku',
    mainCategory: 'cloud',
    secondaryCategories: ['paas', 'deployment'],
    websiteLink: 'https://www.heroku.com',
    brandKitLink: 'https://www.heroku.com/press',
    mainLogo: { url: 'https://picsum.photos/id/210/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/211/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/212/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/heroku/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/heroku/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'netlify',
    name: 'Netlify',
    mainCategory: 'cloud',
    secondaryCategories: ['jamstack', 'hosting'],
    websiteLink: 'https://www.netlify.com',
    brandKitLink: 'https://www.netlify.com/press/',
    mainLogo: { url: 'https://picsum.photos/id/213/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/214/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/215/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/netlify/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/netlify/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    mainCategory: 'cloud',
    secondaryCategories: ['cdn', 'security'],
    websiteLink: 'https://www.cloudflare.com',
    brandKitLink: 'https://www.cloudflare.com/press/',
    mainLogo: { url: 'https://picsum.photos/id/216/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/217/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/218/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/cloudflare/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/cloudflare/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    mainCategory: 'database',
    secondaryCategories: ['nosql', 'cloud'],
    websiteLink: 'https://www.mongodb.com',
    brandKitLink: 'https://www.mongodb.com/press',
    mainLogo: { url: 'https://picsum.photos/id/219/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/220/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/221/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/mongodb/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/mongodb/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    mainCategory: 'database',
    secondaryCategories: ['sql', 'open-source'],
    websiteLink: 'https://www.postgresql.org',
    brandKitLink: 'https://www.postgresql.org/about/press/',
    mainLogo: { url: 'https://picsum.photos/id/222/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/223/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/224/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/postgresql/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/postgresql/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'redis',
    name: 'Redis',
    mainCategory: 'database',
    secondaryCategories: ['cache', 'in-memory'],
    websiteLink: 'https://redis.io',
    brandKitLink: 'https://redis.io/topics/sponsors',
    mainLogo: { url: 'https://picsum.photos/id/225/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/226/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/227/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/redis/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/redis/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'mysql',
    name: 'MySQL',
    mainCategory: 'database',
    secondaryCategories: ['sql', 'relational'],
    websiteLink: 'https://www.mysql.com',
    brandKitLink: 'https://www.mysql.com/about/legal/',
    mainLogo: { url: 'https://picsum.photos/id/228/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/229/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/230/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/mysql/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/mysql/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'supabase',
    name: 'Supabase',
    mainCategory: 'database',
    secondaryCategories: ['baas', 'postgres'],
    websiteLink: 'https://supabase.com',
    brandKitLink: 'https://supabase.com/brand-assets',
    mainLogo: { url: 'https://picsum.photos/id/231/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/232/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/233/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/supabase/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/supabase/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'firebase',
    name: 'Firebase',
    mainCategory: 'database',
    secondaryCategories: ['baas', 'mobile'],
    websiteLink: 'https://firebase.google.com',
    brandKitLink: 'https://firebase.google.com/brand-guidelines',
    mainLogo: { url: 'https://picsum.photos/id/234/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/235/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/236/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/firebase/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/firebase/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'twilio',
    name: 'Twilio',
    mainCategory: 'communication',
    secondaryCategories: ['api', 'messaging'],
    websiteLink: 'https://www.twilio.com',
    brandKitLink: 'https://www.twilio.com/press',
    mainLogo: { url: 'https://picsum.photos/id/237/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/238/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/239/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/twilio/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/twilio/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'sendgrid',
    name: 'SendGrid',
    mainCategory: 'communication',
    secondaryCategories: ['email', 'api'],
    websiteLink: 'https://sendgrid.com',
    brandKitLink: 'https://sendgrid.com/press/',
    mainLogo: { url: 'https://picsum.photos/id/240/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/241/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/242/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/sendgrid/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/sendgrid/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    mainCategory: 'marketing',
    secondaryCategories: ['email', 'automation'],
    websiteLink: 'https://mailchimp.com',
    brandKitLink: 'https://mailchimp.com/about/brand-assets/',
    mainLogo: { url: 'https://picsum.photos/id/243/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/244/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/245/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/mailchimp/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/mailchimp/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    mainCategory: 'marketing',
    secondaryCategories: ['crm', 'sales'],
    websiteLink: 'https://www.hubspot.com',
    brandKitLink: 'https://www.hubspot.com/company/press',
    mainLogo: { url: 'https://picsum.photos/id/246/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/247/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/248/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/hubspot/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/hubspot/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    mainCategory: 'crm',
    secondaryCategories: ['sales', 'cloud'],
    websiteLink: 'https://www.salesforce.com',
    brandKitLink: 'https://www.salesforce.com/news/press/',
    mainLogo: { url: 'https://picsum.photos/id/249/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/250/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/251/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/salesforce/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/salesforce/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'intercom',
    name: 'Intercom',
    mainCategory: 'communication',
    secondaryCategories: ['support', 'messaging'],
    websiteLink: 'https://www.intercom.com',
    brandKitLink: 'https://www.intercom.com/press',
    mainLogo: { url: 'https://picsum.photos/id/252/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/253/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/254/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/intercom/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/intercom/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    mainCategory: 'support',
    secondaryCategories: ['customer-service', 'helpdesk'],
    websiteLink: 'https://www.zendesk.com',
    brandKitLink: 'https://www.zendesk.com/company/press/',
    mainLogo: { url: 'https://picsum.photos/id/255/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/256/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/257/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/zendesk/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/zendesk/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'zoom',
    name: 'Zoom',
    mainCategory: 'communication',
    secondaryCategories: ['video', 'meetings'],
    websiteLink: 'https://zoom.us',
    brandKitLink: 'https://zoom.us/brand',
    mainLogo: { url: 'https://picsum.photos/id/258/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/259/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/260/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/zoom/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/zoom/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'discord',
    name: 'Discord',
    mainCategory: 'communication',
    secondaryCategories: ['chat', 'community'],
    websiteLink: 'https://discord.com',
    brandKitLink: 'https://discord.com/branding',
    mainLogo: { url: 'https://picsum.photos/id/261/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/262/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/263/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/discord/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/discord/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'telegram',
    name: 'Telegram',
    mainCategory: 'communication',
    secondaryCategories: ['messaging', 'privacy'],
    websiteLink: 'https://telegram.org',
    brandKitLink: 'https://telegram.org/press',
    mainLogo: { url: 'https://picsum.photos/id/264/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/265/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/266/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/telegram/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/telegram/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    mainCategory: 'communication',
    secondaryCategories: ['messaging', 'mobile'],
    websiteLink: 'https://www.whatsapp.com',
    brandKitLink: 'https://www.whatsapp.com/brand-resources',
    mainLogo: { url: 'https://picsum.photos/id/267/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/268/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/269/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/whatsapp/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/whatsapp/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'spotify',
    name: 'Spotify',
    mainCategory: 'entertainment',
    secondaryCategories: ['music', 'streaming'],
    websiteLink: 'https://www.spotify.com',
    brandKitLink: 'https://newsroom.spotify.com/media-resources/',
    mainLogo: { url: 'https://picsum.photos/id/270/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/271/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/272/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/spotify/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/spotify/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'netflix',
    name: 'Netflix',
    mainCategory: 'entertainment',
    secondaryCategories: ['streaming', 'video'],
    websiteLink: 'https://www.netflix.com',
    brandKitLink: 'https://brand.netflix.com',
    mainLogo: { url: 'https://picsum.photos/id/273/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/274/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/275/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/netflix/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/netflix/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'youtube',
    name: 'YouTube',
    mainCategory: 'entertainment',
    secondaryCategories: ['video', 'social'],
    websiteLink: 'https://www.youtube.com',
    brandKitLink: 'https://www.youtube.com/howyoutubeworks/resources/brand-resources/',
    mainLogo: { url: 'https://picsum.photos/id/276/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/277/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/278/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/youtube/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/youtube/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'twitch',
    name: 'Twitch',
    mainCategory: 'entertainment',
    secondaryCategories: ['streaming', 'gaming'],
    websiteLink: 'https://www.twitch.tv',
    brandKitLink: 'https://brand.twitch.tv',
    mainLogo: { url: 'https://picsum.photos/id/279/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/280/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/281/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/twitch/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/twitch/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    mainCategory: 'social',
    secondaryCategories: ['professional', 'networking'],
    websiteLink: 'https://www.linkedin.com',
    brandKitLink: 'https://brand.linkedin.com',
    mainLogo: { url: 'https://picsum.photos/id/282/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/283/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/284/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/linkedin/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/linkedin/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'twitter',
    name: 'Twitter',
    mainCategory: 'social',
    secondaryCategories: ['microblogging', 'news'],
    websiteLink: 'https://twitter.com',
    brandKitLink: 'https://about.twitter.com/en/who-we-are/brand-toolkit',
    mainLogo: { url: 'https://picsum.photos/id/285/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/286/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/287/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/twitter/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/twitter/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'instagram',
    name: 'Instagram',
    mainCategory: 'social',
    secondaryCategories: ['photos', 'mobile'],
    websiteLink: 'https://www.instagram.com',
    brandKitLink: 'https://about.instagram.com/brand/assets',
    mainLogo: { url: 'https://picsum.photos/id/288/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/289/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/290/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/instagram/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/instagram/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    mainCategory: 'social',
    secondaryCategories: ['video', 'mobile'],
    websiteLink: 'https://www.tiktok.com',
    brandKitLink: 'https://newsroom.tiktok.com/en-us/brand-guidelines',
    mainLogo: { url: 'https://picsum.photos/id/291/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/292/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/293/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/tiktok/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/tiktok/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    mainCategory: 'social',
    secondaryCategories: ['discovery', 'inspiration'],
    websiteLink: 'https://www.pinterest.com',
    brandKitLink: 'https://business.pinterest.com/brand-guidelines/',
    mainLogo: { url: 'https://picsum.photos/id/294/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/295/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/296/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/pinterest/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/pinterest/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'reddit',
    name: 'Reddit',
    mainCategory: 'social',
    secondaryCategories: ['community', 'forums'],
    websiteLink: 'https://www.reddit.com',
    brandKitLink: 'https://www.redditinc.com/brand',
    mainLogo: { url: 'https://picsum.photos/id/297/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/298/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/299/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/reddit/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/reddit/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'airtable',
    name: 'Airtable',
    mainCategory: 'productivity',
    secondaryCategories: ['database', 'collaboration'],
    websiteLink: 'https://www.airtable.com',
    brandKitLink: 'https://www.airtable.com/press',
    mainLogo: { url: 'https://picsum.photos/id/300/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/301/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/302/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/airtable/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/airtable/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'miro',
    name: 'Miro',
    mainCategory: 'productivity',
    secondaryCategories: ['whiteboard', 'collaboration'],
    websiteLink: 'https://miro.com',
    brandKitLink: 'https://miro.com/about/press/',
    mainLogo: { url: 'https://picsum.photos/id/303/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/304/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/305/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/miro/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/miro/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'linear',
    name: 'Linear',
    mainCategory: 'productivity',
    secondaryCategories: ['project-management', 'issue-tracking'],
    websiteLink: 'https://linear.app',
    brandKitLink: 'https://linear.app/press',
    mainLogo: { url: 'https://picsum.photos/id/306/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/307/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/308/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/linear/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/linear/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'jira',
    name: 'Jira',
    mainCategory: 'productivity',
    secondaryCategories: ['project-management', 'agile'],
    websiteLink: 'https://www.atlassian.com/software/jira',
    brandKitLink: 'https://www.atlassian.com/company/news/press-kit',
    mainLogo: { url: 'https://picsum.photos/id/309/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/310/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/311/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/jira/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/jira/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'monday',
    name: 'Monday.com',
    mainCategory: 'productivity',
    secondaryCategories: ['project-management', 'workflow'],
    websiteLink: 'https://monday.com',
    brandKitLink: 'https://monday.com/press',
    mainLogo: { url: 'https://picsum.photos/id/312/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/313/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/314/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/monday/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/monday/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    mainCategory: 'productivity',
    secondaryCategories: ['project-management', 'all-in-one'],
    websiteLink: 'https://clickup.com',
    brandKitLink: 'https://clickup.com/press',
    mainLogo: { url: 'https://picsum.photos/id/315/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/316/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/317/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/clickup/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/clickup/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    mainCategory: 'storage',
    secondaryCategories: ['cloud', 'sync'],
    websiteLink: 'https://www.dropbox.com',
    brandKitLink: 'https://www.dropbox.com/branding',
    mainLogo: { url: 'https://picsum.photos/id/318/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/319/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/320/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/dropbox/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/dropbox/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'googledrive',
    name: 'Google Drive',
    mainCategory: 'storage',
    secondaryCategories: ['cloud', 'docs'],
    websiteLink: 'https://www.google.com/drive/',
    brandKitLink: 'https://www.google.com/permissions/logos-trademarks/',
    mainLogo: { url: 'https://picsum.photos/id/321/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/322/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/323/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/googledrive/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/googledrive/text-dark.svg', format: 'svg' }],
      },
    },
  },
  {
    id: 'onedrive',
    name: 'OneDrive',
    mainCategory: 'storage',
    secondaryCategories: ['cloud', 'microsoft'],
    websiteLink: 'https://www.microsoft.com/en-us/microsoft-365/onedrive',
    brandKitLink: 'https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks',
    mainLogo: { url: 'https://picsum.photos/id/324/400/200', format: 'jpg' },
    downloadableFiles: {
      icon: {
        light: [{ url: 'https://picsum.photos/id/325/200/200', format: 'jpg' }],
        dark: [{ url: 'https://picsum.photos/id/326/200/200', format: 'jpg' }],
      },
      text: {
        light: [{ url: 'https://example.com/logos/onedrive/text-light.svg', format: 'svg' }],
        dark: [{ url: 'https://example.com/logos/onedrive/text-dark.svg', format: 'svg' }],
      },
    },
  },
];

export default LOGOS_DATA;