using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Projeto_Roman
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers()
                    .AddNewtonsoftJson(options =>
                    {
                        //Ignora os loopings nas consultas
                        options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                        //Ignora os valores nulos ao fazer junções nas consultas
                        options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                    });
            
            services.AddSwaggerGen(c=>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Roman API",
                    Version = "v1"
                });
            });

            services
                .AddAuthentication(x =>
                {
                    x.DefaultAuthenticateScheme = "JwtBearer";
                    x.DefaultChallengeScheme = "JwtBearer";
                })

                .AddJwtBearer("JwtBearer", x =>
                {
                    x.TokenValidationParameters = new TokenValidationParameters
                    {
                        //Define que o issuer será validado
                        ValidateIssuer = true,

                        //Define que o audience será validado
                        ValidateAudience = true,

                        //Define que o tempo de vida será validado
                        ValidateLifetime = true,

                        //Forma de criptografia e a chave de autenticação
                        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("projeto-roman-autenticacao")),

                        //Verifica o tempo de expiração do token
                        ClockSkew = TimeSpan.FromMinutes(60),

                        //Define de onde está vindo (NOME ISSUER)
                        ValidIssuer = "projetoRoman.webApi",

                        //Define para onde vai (NOME AUDIENCE)
                        ValidAudience = "projetoRoman.webApi"
                    };
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            //Habilita a autenticação
            app.UseAuthentication();

            //Habilita a autorização
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
               c.SwaggerEndpoint("/swagger/v1/swagger.json", "Roman.webAPI");

               c.RoutePrefix = string.Empty;
            });
        }
    }
}
