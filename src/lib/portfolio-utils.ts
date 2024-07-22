import { getCollection } from "astro:content";
import { getImage } from "astro:assets";

const portfolio = (await getCollection("portfolio")).reverse();

const groupedPortfolio = portfolio.reduce((acc, entry) => {
  if (!acc[entry.data.when]) {
    acc[entry.data.when] = [];
  }
  acc[entry.data.when].push(entry);
  return acc;
}, {} as Record<string, typeof portfolio>);

function getImages(portfolioEntry: (typeof portfolio)[0]) {
  return Promise.all(
    portfolioEntry.data.media.map((media) =>
      getImage({
        src: media,
        widths: [100, 1200],
        formats: ["webp"],
      })
    )
  );
}

async function generatePortfolioImages() {
  return Object.fromEntries(
    await Promise.all(portfolio.map(async (e) => [e.id, await getImages(e)]))
  );
}

const parseGithubRepo = (repoLink: string) => {
  const parts = repoLink.split("/");
  const owner = parts[parts.length - 2];
  const repo = parts[parts.length - 1];
  return `${owner}/${repo}`;
};

const parseUrl = (liveLink: string) => {
  return liveLink.replace(/https?:\/\//, "");
};

const timesMap = {
  "short-time": "Short time ago",
  "mid-time": "Medium time ago",
  "long-time": "Long time ago",
};

export {
  portfolio,
  groupedPortfolio,
  parseGithubRepo,
  parseUrl,
  timesMap,
  generatePortfolioImages,
};
