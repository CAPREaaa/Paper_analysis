import re

def is_doi(input):
    return bool(re.match(r'^10.\d{4,9}/[-._;()/:A-Z0-9]+$', input))