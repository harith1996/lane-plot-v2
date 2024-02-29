from pywikibot import Site, Page
from pywikibot.data.api import PropertyGenerator
from page_scraper import get_most_edited_pages
site = Site("en", "wikipedia")
default_revprops = ['timestamp', 'size', 'ids', 'comment', 'tags']

def get_revisions(page_name, revprops = default_revprops, limit=100):
    #for details - https://www.mediawiki.org/wiki/API:Revisions
    params = {
        'titles': page_name,
        'rvprop': '|'.join(revprops),
        'rvdir': 'newer'
    }
    revs = next(iter(PropertyGenerator('revisions', site=site, parameters=params)))['revisions']
    return revs[0:limit], params

