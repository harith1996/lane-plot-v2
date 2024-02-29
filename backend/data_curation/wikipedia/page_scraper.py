import requests
from bs4 import BeautifulSoup


# Get the most revised pages on Wikipedia
def get_most_edited_pages(limit=250):
    most_edited_url = (
        "https://en.wikipedia.org/w/index.php?title=Special:MostRevisions&limit="
        + str(limit)
        + "&offset=0"
    )
    response = requests.get(
        url=most_edited_url,
    )
    soup = BeautifulSoup(response.content, "html.parser")

    # get all ordered list with class "special"
    ordered_lists = soup.find_all("ol", class_="special")

    # find all links in the ordered list
    page_names = []
    for ordered_list in ordered_lists:
        for link in ordered_list.find_all("a"):
            if link.get("href").startswith("/w/index.php?title="):
                page_names.append(link.get("title"))
    return page_names
