export function paginate(items, pageNumber, pageSize) {
    if (!Array.isArray(items) || items.length === 0) return []; // Handle empty items
    if (pageNumber < 1 || pageSize < 1) return []; // Handle invalid inputs
  
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize); // Use slice directly
  }
  