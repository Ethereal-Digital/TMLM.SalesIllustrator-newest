using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TMLM.SalesIllustrator.Shared.Common
{
    public static class IWebHostBuilderExtensions
    {
        public static IWebHostBuilder ConfigureFilesConfiguration(this IWebHostBuilder webHostBuilder) =>
            webHostBuilder.ConfigureAppConfiguration((hostingContext, config) =>
            {
                //IWebHostEnvironment environment = hostingContext.HostingEnvironment;
                //config.SetBasePath(Directory.GetCurrentDirectory())
                //        .AddJsonFile("servicediscovery.json", optional: false, reloadOnChange: true)
                //        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                //        .AddJsonFile($"appsettings.{environment.EnvironmentName}.json", optional: true)
                //        .AddJsonFile("logsettings.json", optional: false, reloadOnChange: true);

                //config.AddEnvironmentVariables();
            });
    }
}
