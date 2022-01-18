using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServicioWebAPICoreNorthwind.Entidades;
using ServicioWebAPICoreNorthwind.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServicioWebAPICoreNorthwind.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebAPICoreNorthwindController : ControllerBase
    {
        NorthwindContext db = new NorthwindContext();
        [HttpGet("ListarClientes")]
        public IEnumerable<Customer> ListarCientes()
        {
            return db.Customers.ToList();
        }
        [HttpGet("ListarProductos")]
        public IEnumerable<Product> ListarProductos()
        {
            return db.Products.ToList();
        }
        [HttpGet("OrdenesPorProducto/{codprod}")]
        public IEnumerable<ConsultaOrdenesPorProducto> OrdenesPorProducto(int codprod)
        {
            var query = from o in db.Orders join od in db.OrderDetails on
                        o.OrderId equals od.OrderId where od.ProductId.Equals(codprod)
                        select new ConsultaOrdenesPorProducto
                        {
                            Orden = o.OrderId, CodCliente = o.CustomerId, CodEmpleado = o.EmployeeId,
                            CodProducto = od.ProductId, Cantidad = od.Quantity
                        };
            return query.ToList();
        }
        [HttpGet("AniodeVentas")]
        public IEnumerable<AnioDeVentas> AniosdeVentas()
        {
            var query = from o in db.Orders
                        select new AnioDeVentas
                        {
                            Anios = o.OrderDate.Value.Year
                        };
            return query.Distinct().ToList();
        }
        [HttpGet("OrdenesporClienteyAnio/{codcliente}/{anio}")]
        public IEnumerable<ConsultaDeOrdenesPorClienteyAnio> ConsultaDeOrdenesPorClienteyAnio(string codcliente,int anio)
        {
            var query= from o in db.Orders join od in db.OrderDetails
                       on o.OrderId equals od.OrderId where
                       o.CustomerId.Equals(codcliente) && o.OrderDate.Value.Year.Equals(anio)
                       group new {o,od} by new {o.OrderId,o.OrderDate,o.OrderDate.Value.Year, o.CustomerId}
                       into gidat select new ConsultaDeOrdenesPorClienteyAnio
                       {
                           Orden=gidat.Key.OrderId,
                           Fecha=gidat.Key.OrderDate.Value.Day+"/"+ gidat.Key.OrderDate.Value.Month
                           +"/"+ gidat.Key.OrderDate.Value.Year, Anio= gidat.Key.Year,
                           CodCliente=gidat.Key.CustomerId,
                           Venta= Math.Round(gidat.Sum(g => g.od.UnitPrice*
                           g.od.Quantity*(1-g.od.Quantity)))
                       };
            return query.ToList();
        }
    }
}
