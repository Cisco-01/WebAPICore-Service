using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServicioWebAPICoreNorthwind.Models
{
    public class OrdenesporProductoyMes
    {
        public int Orden { get; set; }
        public int CodProducto { get; set; }
        public int NroMes { get; set; }
        public string CodCliente { get; set; }
        public string NombreCliente { get; set; }
        public int CantProductVendidos { get; set; }
        public decimal VentadeOrden { get; set; }
    }
}
