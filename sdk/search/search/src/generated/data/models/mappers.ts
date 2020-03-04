/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";


export const SuggestResult: coreHttp.CompositeMapper = {
  serializedName: "SuggestResult",
  type: {
    name: "Composite",
    className: "SuggestResult",
    modelProperties: {
      text: {
        readOnly: true,
        serializedName: "@search\\.text",
        type: {
          name: "String"
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const SuggestDocumentsResult: coreHttp.CompositeMapper = {
  serializedName: "SuggestDocumentsResult",
  type: {
    name: "Composite",
    className: "SuggestDocumentsResult",
    modelProperties: {
      results: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SuggestResult",
              additionalProperties: {
                type: {
                  name: "Object"
                }
              }
            }
          }
        }
      },
      coverage: {
        readOnly: true,
        serializedName: "@search\\.coverage",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FacetResult: coreHttp.CompositeMapper = {
  serializedName: "FacetResult",
  type: {
    name: "Composite",
    className: "FacetResult",
    modelProperties: {
      count: {
        readOnly: true,
        serializedName: "count",
        type: {
          name: "Number"
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const SearchRequest: coreHttp.CompositeMapper = {
  serializedName: "SearchRequest",
  type: {
    name: "Composite",
    className: "SearchRequest",
    modelProperties: {
      includeTotalResultCount: {
        serializedName: "count",
        type: {
          name: "Boolean"
        }
      },
      facets: {
        serializedName: "facets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      highlightFields: {
        serializedName: "highlight",
        type: {
          name: "String"
        }
      },
      highlightPostTag: {
        serializedName: "highlightPostTag",
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        serializedName: "highlightPreTag",
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        serializedName: "minimumCoverage",
        type: {
          name: "Number"
        }
      },
      orderBy: {
        serializedName: "orderby",
        type: {
          name: "String"
        }
      },
      queryType: {
        serializedName: "queryType",
        type: {
          name: "Enum",
          allowedValues: [
            "simple",
            "full"
          ]
        }
      },
      scoringParameters: {
        serializedName: "scoringParameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      scoringProfile: {
        serializedName: "scoringProfile",
        type: {
          name: "String"
        }
      },
      searchText: {
        serializedName: "search",
        type: {
          name: "String"
        }
      },
      searchFields: {
        serializedName: "searchFields",
        type: {
          name: "String"
        }
      },
      searchMode: {
        serializedName: "searchMode",
        type: {
          name: "Enum",
          allowedValues: [
            "any",
            "all"
          ]
        }
      },
      select: {
        serializedName: "select",
        type: {
          name: "String"
        }
      },
      skip: {
        serializedName: "skip",
        type: {
          name: "Number"
        }
      },
      top: {
        serializedName: "top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SearchResult: coreHttp.CompositeMapper = {
  serializedName: "SearchResult",
  type: {
    name: "Composite",
    className: "SearchResult",
    modelProperties: {
      score: {
        nullable: false,
        readOnly: true,
        serializedName: "@search\\.score",
        type: {
          name: "Number"
        }
      },
      highlights: {
        readOnly: true,
        serializedName: "@search\\.highlights",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "String"
                }
              }
            }
          }
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const SearchDocumentsResult: coreHttp.CompositeMapper = {
  serializedName: "SearchDocumentsResult",
  type: {
    name: "Composite",
    className: "SearchDocumentsResult",
    modelProperties: {
      count: {
        readOnly: true,
        serializedName: "@odata\\.count",
        type: {
          name: "Number"
        }
      },
      coverage: {
        readOnly: true,
        serializedName: "@search\\.coverage",
        type: {
          name: "Number"
        }
      },
      facets: {
        readOnly: true,
        serializedName: "@search\\.facets",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Composite",
                  className: "FacetResult",
                  additionalProperties: {
                    type: {
                      name: "Object"
                    }
                  }
                }
              }
            }
          }
        }
      },
      nextPageParameters: {
        readOnly: true,
        serializedName: "@search\\.nextPageParameters",
        type: {
          name: "Composite",
          className: "SearchRequest"
        }
      },
      results: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchResult",
              additionalProperties: {
                type: {
                  name: "Object"
                }
              }
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "@odata\\.nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IndexAction: coreHttp.CompositeMapper = {
  serializedName: "IndexAction",
  type: {
    name: "Composite",
    className: "IndexAction",
    modelProperties: {
      actionType: {
        nullable: false,
        serializedName: "@search\\.action",
        type: {
          name: "Enum",
          allowedValues: [
            "upload",
            "merge",
            "mergeOrUpload",
            "delete"
          ]
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const IndexBatch: coreHttp.CompositeMapper = {
  serializedName: "IndexBatch",
  type: {
    name: "Composite",
    className: "IndexBatch",
    modelProperties: {
      actions: {
        required: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IndexAction",
              additionalProperties: {
                type: {
                  name: "Object"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const IndexingResult: coreHttp.CompositeMapper = {
  serializedName: "IndexingResult",
  type: {
    name: "Composite",
    className: "IndexingResult",
    modelProperties: {
      key: {
        readOnly: true,
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      errorMessage: {
        readOnly: true,
        serializedName: "errorMessage",
        type: {
          name: "String"
        }
      },
      succeeded: {
        nullable: false,
        readOnly: true,
        serializedName: "status",
        type: {
          name: "Boolean"
        }
      },
      statusCode: {
        nullable: false,
        readOnly: true,
        serializedName: "statusCode",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IndexDocumentsResult: coreHttp.CompositeMapper = {
  serializedName: "IndexDocumentsResult",
  type: {
    name: "Composite",
    className: "IndexDocumentsResult",
    modelProperties: {
      results: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IndexingResult"
            }
          }
        }
      }
    }
  }
};

export const SuggestRequest: coreHttp.CompositeMapper = {
  serializedName: "SuggestRequest",
  type: {
    name: "Composite",
    className: "SuggestRequest",
    modelProperties: {
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      useFuzzyMatching: {
        serializedName: "fuzzy",
        type: {
          name: "Boolean"
        }
      },
      highlightPostTag: {
        serializedName: "highlightPostTag",
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        serializedName: "highlightPreTag",
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        serializedName: "minimumCoverage",
        type: {
          name: "Number"
        }
      },
      orderBy: {
        serializedName: "orderby",
        type: {
          name: "String"
        }
      },
      searchText: {
        required: true,
        serializedName: "search",
        type: {
          name: "String"
        }
      },
      searchFields: {
        serializedName: "searchFields",
        type: {
          name: "String"
        }
      },
      select: {
        serializedName: "select",
        type: {
          name: "String"
        }
      },
      suggesterName: {
        required: true,
        serializedName: "suggesterName",
        type: {
          name: "String"
        }
      },
      top: {
        serializedName: "top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AutocompleteRequest: coreHttp.CompositeMapper = {
  serializedName: "AutocompleteRequest",
  type: {
    name: "Composite",
    className: "AutocompleteRequest",
    modelProperties: {
      searchText: {
        required: true,
        serializedName: "search",
        type: {
          name: "String"
        }
      },
      autocompleteMode: {
        serializedName: "autocompleteMode",
        type: {
          name: "Enum",
          allowedValues: [
            "oneTerm",
            "twoTerms",
            "oneTermWithContext"
          ]
        }
      },
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      useFuzzyMatching: {
        serializedName: "fuzzy",
        type: {
          name: "Boolean"
        }
      },
      highlightPostTag: {
        serializedName: "highlightPostTag",
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        serializedName: "highlightPreTag",
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        serializedName: "minimumCoverage",
        type: {
          name: "Number"
        }
      },
      searchFields: {
        serializedName: "searchFields",
        type: {
          name: "String"
        }
      },
      suggesterName: {
        required: true,
        serializedName: "suggesterName",
        type: {
          name: "String"
        }
      },
      top: {
        serializedName: "top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AutocompleteItem: coreHttp.CompositeMapper = {
  serializedName: "AutocompleteItem",
  type: {
    name: "Composite",
    className: "AutocompleteItem",
    modelProperties: {
      text: {
        readOnly: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      queryPlusText: {
        readOnly: true,
        serializedName: "queryPlusText",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AutocompleteResult: coreHttp.CompositeMapper = {
  serializedName: "AutocompleteResult",
  type: {
    name: "Composite",
    className: "AutocompleteResult",
    modelProperties: {
      coverage: {
        readOnly: true,
        serializedName: "@search\\.coverage",
        type: {
          name: "Number"
        }
      },
      results: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AutocompleteItem"
            }
          }
        }
      }
    }
  }
};

export const SearchError: coreHttp.CompositeMapper = {
  serializedName: "SearchError",
  type: {
    name: "Composite",
    className: "SearchError",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RequestOptions: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RequestOptions",
    modelProperties: {
      clientRequestId: {
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const SearchOptions: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchOptions",
    modelProperties: {
      includeTotalResultCount: {
        type: {
          name: "Boolean"
        }
      },
      facets: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      filter: {
        type: {
          name: "String"
        }
      },
      highlightFields: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      highlightPostTag: {
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        type: {
          name: "Number"
        }
      },
      orderBy: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      queryType: {
        type: {
          name: "Enum",
          allowedValues: [
            "simple",
            "full"
          ]
        }
      },
      scoringParameters: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      scoringProfile: {
        type: {
          name: "String"
        }
      },
      searchFields: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      searchMode: {
        type: {
          name: "Enum",
          allowedValues: [
            "any",
            "all"
          ]
        }
      },
      select: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      skip: {
        type: {
          name: "Number"
        }
      },
      top: {
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SuggestOptions: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SuggestOptions",
    modelProperties: {
      filter: {
        type: {
          name: "String"
        }
      },
      useFuzzyMatching: {
        type: {
          name: "Boolean"
        }
      },
      highlightPostTag: {
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        type: {
          name: "Number"
        }
      },
      orderBy: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      searchFields: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      select: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      top: {
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AutocompleteOptions: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutocompleteOptions",
    modelProperties: {
      autocompleteMode: {
        type: {
          name: "Enum",
          allowedValues: [
            "oneTerm",
            "twoTerms",
            "oneTermWithContext"
          ]
        }
      },
      filter: {
        type: {
          name: "String"
        }
      },
      useFuzzyMatching: {
        type: {
          name: "Boolean"
        }
      },
      highlightPostTag: {
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        type: {
          name: "Number"
        }
      },
      searchFields: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      top: {
        type: {
          name: "Number"
        }
      }
    }
  }
};