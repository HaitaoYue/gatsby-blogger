---
title: "How to use mkdocs-material theme in readthedocs"
date: "2019-08-17"
image: ""
thumb: ""
---

If you want to use material theme in [readthedocs](http://readthedocs.org)

1. Need add .readthedocs.yml file under the project root folder, and write the content.

```yaml
# .readthedocs.yml
# Read the Docs configuration file
# See https://docs.readthedocs.io/en/stable/config-file/v2.html for details

# Required
version: 2

# Build documentation in the docs/ directory with Sphinx
mkdocs:
  configuration: mkdocs.yml
  fail_on_warning: false

# Build documentation with MkDocs
#mkdocs:
#  configuration: mkdocs.yml

# Optionally build your docs in additional formats such as PDF and ePub
formats: all

# Optionally set the version of Python and requirements required to build your docs
python:
  version: 3.7
  install:
    - requirements: docs/requirements.txt
```

The content in requirements.txt.

```text
mkdocs>=1.0.4
mkdocs-material>=4.4.0
pygments>=2.4.2
pymdown-extensions>=6.0
```

Then the readthedocs site will build the document for project automatically.
