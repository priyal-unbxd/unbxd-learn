window.UnbxdAnalyticsConf = {
  page: "cat1820001"
};
window.UnbxdAnalyticsConf["page_type"] = "CATEGORY_PATH";
const unbxdSearch = new UnbxdSearch({
    siteKey: "demo-unbxd700181503576558",
    apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
    searchBoxEl: document.getElementById("unbxdInput"),
    searchButtonEl: document.getElementById("searchBtn"),
    products:{
        productType: "SEARCH",
        el: document.getElementById("searchResultsWrapper"),
        productAttributes: [
            "title",
            "uniqueId",
            "price",
            "sku",
            "imageUrl",
            "displayPrice",
            "salePrice",
            "productDescription",
            "unbxd_color_mapping",
            "colorName",
            "color",
            "size"
        ],
        attributesMap: {
            "unxTitle": "title",
            "unxImageUrl": "imageUrl",
            "unxPrice": "salePrice",
            "unxStrikePrice": "displayPrice",
            "unxId": "uniqueId",
            "unxDescription": "productDescription"
        },
        onProductClick:function(product, event) {
            console.log(product)
            console.log(event)
        }
    },
    spellCheck:{
        enabled:true,
        el:  document.getElementById('didYouMeanWrapper')
    },
    facet: {
        facetsEl: document.getElementById('facetsWrapper'),
        selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
        selectedFacetClass: "UNX-selected-facet-btn"
    },
    swatches:{
        enabled: true,
        attributesMap:{swatchImgs: "unbxd_color_mapping","swatchColors": "color", "swatchList": "color"}
    },
    banner:{
        enabled: true,
        el: document.getElementById("bannerContainer"),
        count: 1
    },
    loader: {
        el: document.getElementById("loaderEl")
    },
    pagination: {
        el: document.querySelectorAll(".unxPagination"),
        type: "FIXED_PAGINATION",
        pageLimit: 4
      },
    pagesize: {
        el: document.getElementById("changeNoOfProducts")
      },
    sort:{
        enabled:true,
        el:document.getElementById('sortWrapper')
    },
    productView: {
        el: document.getElementById("productViewTypeContainer"),
        defaultViewType: "GRID"
      },
})

unbxdSearch.getCategoryPage();
const setCategory = function (e) {
  const el = e.target;
  const { dataset } = el;
  if (dataset && dataset.id) {
    window.UnbxdAnalyticsConf = {
      page: dataset.id
    };
    unbxdSearch.getCategoryPage();
  }
};


const elm = document.getElementById("categoryLinks");
elm.addEventListener("click", setCategory);
// unbxdSearch.getBrowsePage()