using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServicioWebAPICoreNorthwind.Entidades
{
    public class ConsultaOrdenesPorProducto
    {
        public int Orden { get; set; }
        public string CodCliente { get; set; }
        public int? CodEmpleado { get; set; }
        public int CodProducto { get; set; }
        public int Cantidad { get; set; }
    }
}
