interface MenuItemThumbnail {
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
      thumbnail: MenuItemThumbnail
    }
    sys: {
        id: string
    }
}