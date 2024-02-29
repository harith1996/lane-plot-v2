import pandas as pd
from api_handler import get_revisions
from page_scraper import get_most_edited_pages


def create_revisions_dataset(page_names, num_revisions, revision_props):
    data = []
    for page_name in page_names:
        print("getting revisions of page: ", page_name)
        revs, params = get_revisions(page_name, revision_props, num_revisions)
        for rev in revs[:num_revisions]:
            try:
                data.append(
                    {
                        "rev_id": rev["revid"],
                        "page_name": page_name,
                        "timestamp": rev["timestamp"],
                        "size": rev["size"],
                        "comment": rev["comment"],
                        "tags": rev["tags"],
                    }
                )
            except KeyError:
                print("KeyError: ", rev)
    return pd.DataFrame(data), params


def write_dataset_to_csv(df: pd.DataFrame, filename):
    df.to_csv(filename, index=False)


if __name__ == "__main__":
    num_pages = 10
    num_revisions = 2500
    revision_props = ["timestamp", "size", "ids", "comment", "tags"]
    page_names = get_most_edited_pages(num_pages)
    df, params = create_revisions_dataset(page_names, num_revisions, revision_props)

    # construct filename

    write_dataset_to_csv(
        df,
        filename=",".join(
            [
                "events=revisions",
                "last_rev_age=" + params["rvdir"],
                "num_revisions=" + str(num_revisions),
                "num_pages=" + str(num_pages),
            ]
        )
        + ".csv",
    )
    print(df.head())
    print(df.shape)
