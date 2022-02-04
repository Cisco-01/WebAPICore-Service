using System;
using System.Collections.Generic;

#nullable disable

namespace WebAPI.Models
{
    public partial class Usuario
    {
        public int Id { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Correo { get; set; }
        public string Username { get; set; }
        public string Clave { get; set; }
    }
}
