using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServicioWebAPICoreNorthwind.Entidades
{
    public class ConsultaDeOrdenesPorClienteyAnio
    {
        public int Orden { get; set; }
        public string Fecha { get; set; }
        public int Anio { get; set; }
        public string CodCliente { get; set; }
        public decimal Venta { get; set; }
    }
}
