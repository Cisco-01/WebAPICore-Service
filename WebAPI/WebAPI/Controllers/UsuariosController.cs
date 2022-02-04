using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        bdloginContext db = new bdloginContext();
        [HttpGet("iniciarsesion/{username}/{password}")]
        public ActionResult<List<Usuario>> getiniciosesion(string username, string password)
        {
            var usuario = db.Usuarios.Where(usuario =>
              usuario.Username.Equals(username) &&
              usuario.Clave.Equals(password)).ToList();
            if (usuario == null)
            {
                return NotFound();
            }
            return usuario;
        }
    }
}
