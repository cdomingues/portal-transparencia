declare module "jspdf" {
    import "jspdf-autotable";
    export interface jsPDF {
      autoTable: (options: any) => jsPDF;
    }
  }
  