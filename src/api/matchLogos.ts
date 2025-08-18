import { IconName } from "../components/Icon/Icon.types";

export interface IContentMatchedIconLs {
  sentence: string;
  icon: IconName[];
}

export async function matchLogos(
  sentences: string[],
  logos: IconName[]
): Promise<IContentMatchedIconLs[]> {
  try {
    const response = await fetch("http://localhost:5002/match-logos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sentences, logos }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: IContentMatchedIconLs[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error matching logos:", error);
    throw error;
  }
}
