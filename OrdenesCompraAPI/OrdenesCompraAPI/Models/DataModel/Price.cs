//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace OrdenesCompraAPI.Models.DataModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class Price
    {
        public int Vendor { get; set; }
        public int Part { get; set; }
        public string CatalogNo { get; set; }
        public decimal Price1 { get; set; }
    
        public virtual Part Part1 { get; set; }
        public virtual Vendor Vendor1 { get; set; }
    }
}
