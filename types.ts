interface ContentfulImage {
    fields: {
        title: string;
        file: {
            url: string;
        }
    }
}
  
export interface MenuItem {
    fields: {
      title: string
      price: number
      description: string
      thumbnail: ContentfulImage
      type: string
    }
    sys: {
        id: string
    }
}

export interface ProductItem {
    fields: {
        title: string
        price: number
        image: ContentfulImage
    }
    sys: {
        id: string
    }
}