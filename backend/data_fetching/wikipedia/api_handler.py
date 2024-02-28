from pywikibot import Site, Page
from pywikibot.data.api import PropertyGenerator
from page_scraper import get_most_edited_pages
site = Site("en", "wikipedia")
num_pages = 20
revision_props = ['timestamp', 'size', 'ids', 'comment', 'tags']

page_names = get_most_edited_pages(num_pages)


def get_revisions(page_name, revprops):
    revs = next(iter(PropertyGenerator('revisions', site=site, parameters={
        'titles': page_name,
        'rvprop': '|'.join(revprops),
    })))['revisions']
    return revs

for page_name in page_names:
    revs = get_revisions(page_name, revision_props)
    for rev in revs[:2]:
        print(rev)